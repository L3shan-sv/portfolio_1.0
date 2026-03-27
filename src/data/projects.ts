import type { Project } from '../types';

export const PROJECTS: Record<string, Project> = {
  p1: {
    icon: '🧠',
    cat: 'AIOps · Incident Commander',
    title: 'CLARK ONE — Autonomous SRE',
    github: 'https://github.com/l3shan-sv',
    purpose: 'Eliminate the class of failures where humans are the bottleneck during incidents.',
    desc: 'An autonomous incident commander built on Temporal.io durable workflows. When a service degrades, CLARK ONE ingests live Prometheus metrics, OpenTelemetry traces, and pgvector-indexed incident embeddings, then uses the Claude API to surface a ranked remediation plan in under 60 seconds — and executes it. If the remediation workflow crashes mid-execution, Temporal resumes from the exact checkpoint — no partial failures, no orphaned rollbacks.',
    features: [
      'Temporal.io durable execution: workflow resumes from exact checkpoint after any crash — eliminates partial failure state entirely',
      'LLM co-pilot (Claude API) ingests live Prometheus metrics + OTel traces + pgvector incident embeddings to rank remediation steps in <60 seconds',
      'Workflow activities: K8s pod restarts, HashiCorp Vault secret rotation, AWS API calls — all RBAC-gated with EM approval signals for production blast-radius ops',
      'pgvector similarity search over historical incidents surfaces "this looks like the April Redis OOM" pattern matching before engineers open a terminal',
      'MTTR target under 10 minutes — from alert firing to service healthy, including human approval round-trips for high-blast-radius actions',
      'Full audit trail: every remediation step, approval signal, and rollback is recorded as a Temporal event with causal links to the triggering metric spike',
    ],
    stack: ['Temporal.io', 'Anthropic Claude API', 'Prometheus', 'OpenTelemetry', 'pgvector', 'Kubernetes', 'HashiCorp Vault', 'Python', 'FastAPI'],
    docs: {
      arch: 'Alert fires in Alertmanager → webhook triggers CLARK ONE FastAPI gateway → Temporal workflow starts. Worker activities: (1) MetricIngestor pulls Prometheus range queries, (2) TraceCorrelator fetches OTel spans, (3) EmbeddingSearcher queries pgvector for similar past incidents, (4) LLMPlanner calls Claude API with full context and returns ranked steps, (5) RemediationExecutor runs each step with Vault-signed credentials. EM approval signal gate blocks before any production mutation.',
      setup: [
        'Deploy Temporal cluster: helm install temporal temporalio/temporal -n temporal',
        'Apply CRDs and RBAC: kubectl apply -f clark-rbac.yaml',
        'Configure Vault AppRole for secret rotation activities',
        'Set ANTHROPIC_API_KEY + PGVECTOR_DSN in Kubernetes secrets',
        'Deploy workers: kubectl apply -f clark-worker-deployment.yaml',
        'Register workflows: python -m clark.register --temporal-host temporal:7233',
      ],
      codeLabel: 'Durable Workflow (Temporal)',
      code: `<span class="kw">@workflow.defn</span>
<span class="kw">class</span> <span class="fn">IncidentRemediationWorkflow</span>:
    <span class="kw">@workflow.run</span>
    <span class="kw">async def</span> <span class="fn">run</span>(self, incident: IncidentContext) -> RemediationResult:
        <span class="cm"># Step 1 — gather context (resumes here if worker crashes)</span>
        metrics  = <span class="kw">await</span> workflow.execute_activity(ingest_metrics,    incident)
        traces   = <span class="kw">await</span> workflow.execute_activity(correlate_traces,  incident)
        similar  = <span class="kw">await</span> workflow.execute_activity(search_embeddings, incident)

        <span class="cm"># Step 2 — LLM ranks remediation steps</span>
        plan = <span class="kw">await</span> workflow.execute_activity(
            llm_plan, LLMInput(metrics, traces, similar),
            start_to_close_timeout=timedelta(seconds=<span class="num">60</span>)
        )

        <span class="cm"># Step 3 — human approval gate for prod blast-radius ops</span>
        <span class="kw">if</span> plan.blast_radius == <span class="str">"production"</span>:
            approved = <span class="kw">await</span> workflow.wait_for_signal(<span class="str">"em_approval"</span>,
                timeout=timedelta(minutes=<span class="num">10</span>))
            <span class="kw">if not</span> approved:
                <span class="kw">return</span> RemediationResult(status=<span class="str">"aborted"</span>)

        <span class="cm"># Step 4 — execute each remediation step durably</span>
        <span class="kw">for</span> step <span class="kw">in</span> plan.steps:
            <span class="kw">await</span> workflow.execute_activity(
                execute_remediation, step,
                retry_policy=RetryPolicy(max_attempts=<span class="num">3</span>)
            )
        <span class="kw">return</span> RemediationResult(status=<span class="str">"resolved"</span>)`,
    },
    images: [
      { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', caption: 'CLARK ONE — live incident dashboard' },
      { src: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80', caption: 'Temporal workflow execution trace' },
    ],
  },

  p2: {
    icon: '🔁',
    cat: 'GitOps · Enterprise CI/CD',
    title: 'GitOps Pipeline — Enterprise Standard of Truth',
    github: 'https://github.com/l3shan-sv',
    purpose: 'Make configuration drift a solved problem, not an on-call rotation.',
    desc: 'An enterprise-grade CI/CD engine where Git is the single source of truth across 8+ environments. ArgoCD continuously reconciles cluster state against the repo — any drift is detected in seconds and self-healed automatically. OPA Gatekeeper acts as the cluster\'s immune system, rejecting non-compliant pods before they ever reach production. A compliance score across 6 pillars (observability, SLO, CVE posture, Vault integration, runbooks, network policy) must hit 80/100 or deployment is hard-blocked.',
    features: [
      'ArgoCD enforces Git-as-Source-of-Truth across 8+ environments — real-time drift detection and automatic self-healing eliminate config drift as a class of failure',
      'OPA Gatekeeper admission webhook scores every pod across 6 pillars: observability readiness, SLO annotations, CVE posture, Vault secret injection, runbook links, network policy — score <80/100 is a hard block',
      'Blue-green deployment strategy with automated test gates — 20+ weekly zero-downtime releases, instant rollback on failed health checks',
      'Manual intervention reduced by 88% — the pipeline handles promotion, rollback, and drift remediation autonomously',
      'Full compliance audit trail: every admission decision, policy violation, and auto-remediation logged with causal commit reference',
      'Multi-cluster ArgoCD ApplicationSet syncs across dev/staging/canary/prod simultaneously with environment-specific override layers via Kustomize',
    ],
    stack: ['ArgoCD', 'Kubernetes', 'OPA Gatekeeper', 'OPA / Rego', 'Helm', 'Kustomize', 'GitHub Actions', 'Trivy', 'GitOps'],
    docs: {
      arch: 'Developers push to feature branches → GitHub Actions runs lint + unit tests + Trivy CVE scan → merge to main → Helm chart values updated with new image tag → ArgoCD ApplicationSet detects change and syncs all target clusters. OPA Gatekeeper admission webhook evaluates every pod spec against 6 ConstraintTemplates before scheduling. Compliance score aggregated by a CronJob and surfaced in the IDP portal.',
      setup: [
        'Bootstrap ArgoCD: kubectl apply -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml',
        'Apply ApplicationSet: kubectl apply -f applicationsets/gitops-pipeline.yaml',
        'Install OPA Gatekeeper: helm install gatekeeper gatekeeper/gatekeeper -n gatekeeper-system',
        'Apply ConstraintTemplates: kubectl apply -f policies/constraints/',
        'Configure GitHub Actions secrets: ARGOCD_TOKEN, ECR_REGISTRY, KUBECONFIG',
        'Validate: argocd app list && kubectl get constrainttemplates',
      ],
      codeLabel: 'OPA Gatekeeper Policy (Rego)',
      code: `<span class="kw">package</span> k8scompliancescore

<span class="cm"># Scores a pod across 6 pillars — blocks if total < 80</span>
<span class="kw">violation</span>[{<span class="str">"msg"</span>: msg}] {
    score := compute_score(input.review.object)
    score < <span class="num">80</span>
    msg := sprintf(<span class="str">"Compliance score %v/100 < 80. Failing pillars: %v"</span>,
                   [score, failing_pillars(input.review.object)])
}

<span class="kw">compute_score</span>(pod) = score {
    pillars := [
        observability_score(pod),   <span class="cm"># metrics + logs + traces</span>
        slo_score(pod),             <span class="cm"># SLO annotations present</span>
        cve_score(pod),             <span class="cm"># Trivy CVE severity</span>
        vault_score(pod),           <span class="cm"># secrets from Vault, not env vars</span>
        runbook_score(pod),         <span class="cm"># runbook URL annotation</span>
        netpol_score(pod),          <span class="cm"># NetworkPolicy exists</span>
    ]
    score := sum(pillars)
}`,
    },
    images: [
      { src: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80', caption: 'ArgoCD multi-cluster sync dashboard' },
      { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', caption: 'OPA compliance gate in action' },
    ],
  },

  p3: {
    icon: '🔄',
    cat: 'Data Engineering · CDC',
    title: 'MigrateX — Zero-Downtime DB Migration Engine',
    github: 'https://github.com/l3shan-sv',
    purpose: 'Solve the database migration problem where most engineers never look: the transaction log.',
    desc: 'A log-based CDC migration engine that operates at the database transaction log level — not the application level. Using Kafka and Debezium, MigrateX streams WAL/binlog events to migrate between heterogeneous databases (PostgreSQL → MongoDB) with zero application downtime and zero data loss. No dual-write code in the application, no dual-write race condition, no inconsistency windows. At-least-once delivery with consumer-side idempotency ensures exactly-once semantics at the data layer.',
    features: [
      'Log-based CDC via Debezium operating at WAL/binlog level — no application-level double-writing, no dual-write race condition, zero data loss guarantee',
      'Streams PostgreSQL WAL events through Kafka topics to MongoDB consumers — heterogeneous database migration with schema evolution support',
      'Consumer-side idempotency via Redis SET NX per event offset — Kafka at-least-once delivery converted to exactly-once data semantics',
      'Zero application downtime: cutover is a DNS switch after consumer lag reaches zero, not a maintenance window',
      'Avoids the dual-write race condition (write A succeeds, write B fails, databases diverge) that causes silent data corruption in naive migration approaches',
      'Full observability: Debezium connector lag, Kafka consumer group offsets, per-table migration progress — all surfaced in Grafana',
    ],
    stack: ['Apache Kafka', 'Debezium CDC', 'PostgreSQL', 'MongoDB', 'Redis', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'Python'],
    docs: {
      arch: 'Debezium Kafka Connect connector reads PostgreSQL WAL (replication slot) and publishes row-level change events to Kafka topics (one per table). Transformer service applies schema mapping and type coercion. MongoDB sink consumers apply changes idempotently using Redis SET NX per event offset. Migration monitor tracks consumer lag per topic and triggers cutover automation when lag hits zero for all tables.',
      setup: [
        'Deploy Kafka cluster: helm install kafka bitnami/kafka --set replicaCount=3',
        'Deploy Kafka Connect with Debezium: kubectl apply -f debezium-connect.yaml',
        'Create replication slot: SELECT pg_create_logical_replication_slot(\'migratex\', \'pgoutput\');',
        'Register connector: curl -X POST kafka-connect:8083/connectors -d @pg-source.json',
        'Deploy MongoDB sink consumers: kubectl apply -f mongo-consumer-deployment.yaml',
        'Monitor lag: kubectl exec -it kafka-0 -- kafka-consumer-groups.sh --describe --group migratex',
      ],
      codeLabel: 'Idempotent CDC Consumer',
      code: `<span class="kw">class</span> <span class="fn">IdempotentMigrationConsumer</span>:
    <span class="kw">def</span> <span class="fn">process_event</span>(self, event: CDCEvent) -> bool:
        <span class="cm"># Redis SET NX gives us exactly-once semantics over Kafka's</span>
        <span class="cm"># at-least-once delivery — safe to replay without side effects</span>
        lock_key = <span class="str">f"migratex:processed:{event.lsn}:{event.table}"</span>

        acquired = self.redis.set(
            lock_key, <span class="str">"1"</span>,
            nx=<span class="kw">True</span>,           <span class="cm"># only set if Not eXists</span>
            ex=<span class="num">86400</span>           <span class="cm"># 24h TTL — covers replay window</span>
        )
        <span class="kw">if not</span> acquired:
            return <span class="kw">False</span>     <span class="cm"># already processed — skip safely</span>

        <span class="kw">match</span> event.op:
            <span class="kw">case</span> <span class="str">"c"</span>: self.mongo.insert_one(event.after)
            <span class="kw">case</span> <span class="str">"u"</span>: self.mongo.replace_one({<span class="str">"_id"</span>: event.key}, event.after)
            <span class="kw">case</span> <span class="str">"d"</span>: self.mongo.delete_one({<span class="str">"_id"</span>: event.key})
        return <span class="kw">True</span>`,
    },
    images: [
      { src: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80', caption: 'CDC pipeline — WAL to Kafka to MongoDB' },
    ],
  },

  p4: {
    icon: '🌐',
    cat: 'Network Engineering · eBPF',
    title: 'NimbusNet — Kernel-Aware Global Network Mesh',
    github: 'https://github.com/l3shan-sv',
    purpose: 'Detect and route around network failures before the application layer knows they exist.',
    desc: 'A global multi-region network mesh on AWS Transit Gateway where C-based eBPF probes monitor TCP health at the Linux kernel level. eBPF programs attached to kernel socket buffers surface per-flow RTT, congestion window state, and ECN signals in real time. When packet loss or RST floods are detected, BGP-style autonomous failover triggers in milliseconds — without application code changes, without DNS TTL delays, without a human in the loop. Active-active across 3 AZs per region with 99.99% theoretical SLA.',
    features: [
      'eBPF probes written in C, attached to kernel socket buffers — detect packet loss, retransmit storms, and RST floods before the application layer is aware',
      'Per-flow observability: RTT histograms, congestion window state, ECN signals, TCP SACK events — all surfaced from kernel space to Prometheus via perf ring buffers',
      'BGP-style autonomous failover in milliseconds — no DNS TTL delay, no application code change, no human required',
      'AWS Transit Gateway mesh across 3 AZs per region: Route 53 latency routing → CloudFront WAF → private subnet EKS clusters',
      'Active-active multi-region: 99.99% theoretical SLA, RTO <25 min, RPO <8 min',
      'eBPF programs loaded and managed by a Kubernetes DaemonSet — zero-downtime probe updates via BTF-enabled CO-RE (Compile Once, Run Everywhere)',
    ],
    stack: ['eBPF', 'C (eBPF)', 'AWS Transit Gateway', 'BGP Failover', 'Kubernetes', 'Terraform', 'Prometheus', 'Route 53', 'CloudFront', 'WAF'],
    docs: {
      arch: 'eBPF programs (C, loaded via libbpf) attach to tcp_retransmit_skb, inet_sock_set_state, and tcp_probe kernel tracepoints. Per-flow metrics exported to userspace via BPF perf ring buffers. Prometheus ebpf-exporter scrapes aggregated metrics. Failover controller watches RTT and loss thresholds and updates AWS Transit Gateway route tables via the EC2 API. Multi-region: us-east-1 ↔ eu-west-1 ↔ ap-southeast-1 via TGW peering.',
      setup: [
        'Kernel requirement: >= 5.8 with CONFIG_DEBUG_INFO_BTF=y (CO-RE support)',
        'Build eBPF probes: make -C probes/ ARCH=x86_64',
        'Deploy DaemonSet: kubectl apply -f ebpf-daemonset.yaml (requires privileged + CAP_BPF)',
        'Deploy failover controller: kubectl apply -f failover-controller-deployment.yaml',
        'Configure Transit Gateway peering: terraform apply -target=module.tgw_peering',
        'Validate: kubectl logs -l app=ebpf-exporter | grep tcp_rtt',
      ],
      codeLabel: 'eBPF TCP Probe (C)',
      code: `<span class="cm">// Attached to tcp_probe tracepoint — runs in kernel space</span>
<span class="kw">SEC</span>(<span class="str">"tracepoint/tcp/tcp_probe"</span>)
<span class="kw">int</span> <span class="fn">trace_tcp_probe</span>(struct trace_event_raw_tcp_probe *ctx) {
    <span class="kw">struct</span> flow_key key = {};
    key.saddr = ctx->saddr;
    key.daddr = ctx->daddr;
    key.sport = ctx->sport;
    key.dport = ctx->dport;

    <span class="kw">struct</span> flow_stats *stats = bpf_map_lookup_elem(&flow_map, &key);
    <span class="kw">if</span> (!stats) {
        <span class="kw">struct</span> flow_stats new = {};
        bpf_map_update_elem(&flow_map, &key, &new, BPF_ANY);
        stats = bpf_map_lookup_elem(&flow_map, &key);
        <span class="kw">if</span> (!stats) return <span class="num">0</span>;
    }

    <span class="cm">// Track RTT, cwnd, retransmits from kernel TCP state</span>
    stats->rtt_us    = ctx->srtt >> <span class="num">3</span>;
    stats->cwnd      = ctx->snd_cwnd;
    stats->retrans   += ctx->snd_nxt - ctx->snd_una > ctx->rcv_wnd ? <span class="num">1</span> : <span class="num">0</span>;

    <span class="cm">// Emit to perf ring buffer for userspace exporter</span>
    bpf_perf_event_output(ctx, &events, BPF_F_CURRENT_CPU, stats, sizeof(*stats));
    return <span class="num">0</span>;
}`,
    },
    images: [
      { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', caption: 'Multi-region Transit Gateway mesh topology' },
    ],
  },

  p5: {
    icon: '🚕',
    cat: 'Distributed Systems · Event-Driven',
    title: 'RideFlow — Distributed Ride Dispatch Platform',
    github: 'https://github.com/l3shan-sv',
    purpose: 'Build the Kafka-first architecture where any service can crash and the system keeps moving.',
    desc: 'A Kafka-first distributed ride dispatch platform modelled on Uber/Lyft architecture where services never call each other directly — they only produce and consume events. Any service can crash and the others keep processing. The dual-cancellation race condition (driver and rider cancel simultaneously) is solved with Redis atomic SET NX locks — zero distributed transaction overhead, zero saga compensating transactions. End-to-end idempotency across all consumers means Kafka\'s at-least-once delivery can never cause duplicate rides, matches, or charges.',
    features: [
      'Kafka-first: RideRequest → MatchingService → DriverService → PaymentService → NotificationService — services never talk directly, any can crash independently',
      'Dual-cancellation race condition solved: Redis SET NX atomic lock on ride_id prevents both driver and rider cancelling simultaneously from causing inconsistent state',
      'End-to-end idempotency via Redis SET NX per event_id — Kafka at-least-once delivery cannot produce duplicate rides, matches, or payment charges',
      'Dead Letter Queue with hard retry cap (3 attempts) prevents pipeline saturation from poison-pill messages',
      'Full observability: Prometheus + Kafka Exporter surfacing consumer lag per topic-partition, OpenTelemetry distributed traces stitched across 5 services via correlation_id',
      'All AWS infra (EKS, MSK, ElastiCache, ALB) provisioned via Terraform — reproducible across dev/staging/prod',
    ],
    stack: ['Apache Kafka', 'MSK', 'Kubernetes', 'Redis', 'OpenTelemetry', 'Terraform', 'Prometheus', 'Grafana', 'Python', 'FastAPI', 'EKS'],
    docs: {
      arch: 'AWS MSK (managed Kafka) with 3-broker cluster. Topics: ride.requested, ride.matched, ride.accepted, ride.cancelled, payment.charged. Each service is a separate Kubernetes Deployment with its own consumer group. Redis Cluster (ElastiCache) handles idempotency keys and distributed locks. OpenTelemetry collector sidecars inject trace context as Kafka headers. All consumer lag surfaced via kafka-lag-exporter to Grafana.',
      setup: [
        'Provision MSK: terraform apply -target=module.msk',
        'Create topics: python scripts/create_topics.py --brokers $MSK_BROKERS',
        'Deploy services: kubectl apply -f k8s/ride-dispatch/',
        'Configure OTel: kubectl apply -f otel-collector-config.yaml',
        'Validate: kubectl exec kafka-client -- kafka-consumer-groups.sh --bootstrap-server $MSK --describe --all-groups',
      ],
      codeLabel: 'Idempotent Consumer + DLQ',
      code: `<span class="kw">class</span> <span class="fn">RideMatchingConsumer</span>:
    <span class="kw">async def</span> <span class="fn">process</span>(self, event: RideRequestedEvent) -> None:
        <span class="cm"># Idempotency: skip if already processed (handles Kafka re-delivery)</span>
        key = <span class="str">f"processed:{event.ride_id}:{event.version}"</span>
        <span class="kw">if not</span> await self.redis.set(key, <span class="num">1</span>, nx=<span class="kw">True</span>, ex=<span class="num">3600</span>):
            return   <span class="cm"># duplicate — safe to discard</span>

        <span class="cm"># Distributed lock prevents dual-cancellation race</span>
        lock = <span class="str">f"ride_lock:{event.ride_id}"</span>
        <span class="kw">async with</span> self.redis.lock(lock, timeout=<span class="num">5</span>):
            driver = <span class="kw">await</span> self.find_nearest_driver(event)
            <span class="kw">if not</span> driver:
                <span class="kw">await</span> self.dlq_producer.send(<span class="str">"ride.dlq"</span>, event, reason=<span class="str">"no_driver"</span>)
                return

            <span class="kw">await</span> self.producer.send(<span class="str">"ride.matched"</span>,
                RideMatchedEvent(ride_id=event.ride_id, driver_id=driver.id,
                                 trace_id=event.trace_id))   <span class="cm"># propagate trace</span>`,
    },
    images: [
      { src: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80', caption: 'Kafka event topology across 5 services' },
      { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', caption: 'Consumer lag dashboard per topic-partition' },
    ],
  },

  p6: {
    icon: '🏗️',
    cat: 'Internal Developer Platform',
    title: 'nerve.idp — Internal Developer Platform',
    github: 'https://github.com/l3shan-sv',
    purpose: 'Replace tribal knowledge and Slack-based approvals with a self-service platform engineers actually want to use.',
    desc: 'A full Internal Developer Platform: 11 FastAPI microservices + React 18 TypeScript frontend covering service scaffolding, IaC approval workflows, compliance enforcement, error budget management, and AI-assisted incident response — all in one portal. The Google SRE multi-window burn rate model is enforced at the API gateway: when error budget hits zero, new deployments receive 423 Locked. A Neo4j blast radius visualizer shows 5-hop dependency graphs so engineers know exactly what breaks when service X goes down. The Claude API co-pilot surfaces root cause and drafts post-mortems during active incidents.',
    features: [
      'Google SRE multi-window burn rate model enforced at API gateway: error budget exhaustion returns 423 Locked — no deployments to burning services, period',
      'Neo4j 5-hop graph traversal blast radius visualizer: d3.js rendering + Redis caching reduces query latency from 800ms to 5ms — "if payments goes down, here are the 23 services that feel it"',
      'OPA Gatekeeper admission webhook scores pods across 6 pillars (observability, SLO, CVE, Vault, runbooks, NetworkPolicy) — <80/100 hard-blocks deployment',
      'Claude API + pgvector similarity search over past incidents: surfaces root cause hypothesis, recommends rollback vs patch, generates draft post-mortem — from the portal, during the incident',
      'Service scaffolding: create a new microservice with opinionated defaults (OTel instrumentation, Vault sidecar, SLO annotations, runbook template) in one portal click',
      'IaC approval workflow (Temporal.io): Terraform plan diffs surface in the portal for EM review — approval triggers ArgoCD sync; rejection creates a JIRA ticket with context',
    ],
    stack: ['FastAPI', 'React', 'TypeScript', 'Temporal.io', 'Neo4j', 'OPA Gatekeeper', 'ArgoCD', 'Anthropic Claude API', 'pgvector', 'Redis', 'PostgreSQL', 'Kubernetes', 'HashiCorp Vault'],
    docs: {
      arch: '11 FastAPI services behind an NGINX ingress: portal-api (BFF), slo-service, scaffolding-service, blast-radius-service (Neo4j), compliance-service (OPA), incident-service (Claude API + pgvector), iac-approval-service (Temporal.io), metrics-proxy, auth-service, runbook-service, post-mortem-service. React 18 + TypeScript frontend with React Query for server state. Auth via HashiCorp Vault OIDC + RBAC.',
      setup: [
        'Deploy backing services: helm install postgres, redis, neo4j, temporal',
        'Apply Vault policies: vault policy write nerve-idp policies/nerve-idp.hcl',
        'Build and push services: docker buildx bake -f docker-bake.hcl --push',
        'Deploy to Kubernetes: kubectl apply -f k8s/nerve-idp/',
        'Seed Neo4j dependency graph: python scripts/seed_graph.py --neo4j-uri bolt://neo4j:7687',
        'Configure Claude API: kubectl create secret generic ai-secrets --from-literal=ANTHROPIC_API_KEY=$KEY',
      ],
      codeLabel: 'Error Budget Gate (SRE Burn Rate)',
      code: `<span class="kw">class</span> <span class="fn">ErrorBudgetGateway</span>:
    <span class="cm">"""Multi-window burn rate — blocks deploys when budget is gone."""</span>

    WINDOWS = [
        (<span class="num">1</span>,  <span class="num">14.4</span>),   <span class="cm"># 1h window,  14.4x burn rate = critical</span>
        (<span class="num">6</span>,  <span class="num">6.0</span>),    <span class="cm"># 6h window,  6.0x burn rate = high</span>
        (<span class="num">72</span>, <span class="num">1.0</span>),    <span class="cm"># 3d window,  1.0x burn rate = warning</span>
    ]

    <span class="kw">async def</span> <span class="fn">check</span>(self, service: str) -> BudgetStatus:
        slo = <span class="kw">await</span> self.slo_db.get(service)
        error_rate = <span class="kw">lambda</span> h: self.prometheus.query(
            <span class="str">f'rate(http_requests_total{{service="{service}",status=~"5.."}[{h}h])'</span>
            <span class="str">f' / rate(http_requests_total{{service="{service}"}}[{h}h])'</span>
        )

        <span class="kw">for</span> window_h, threshold <span class="kw">in</span> self.WINDOWS:
            burn = error_rate(window_h) / (<span class="num">1</span> - slo.target)
            <span class="kw">if</span> burn > threshold:
                <span class="kw">return</span> BudgetStatus(
                    deploys_allowed=<span class="kw">False</span>,
                    http_status=<span class="num">423</span>,   <span class="cm"># 423 Locked</span>
                    reason=<span class="str">f"{window_h}h burn rate {burn:.1f}x > {threshold}x threshold"</span>
                )
        <span class="kw">return</span> BudgetStatus(deploys_allowed=<span class="kw">True</span>)`,
    },
    images: [
      { src: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80', caption: 'nerve.idp — portal dashboard' },
      { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', caption: 'Neo4j blast radius 5-hop visualizer' },
    ],
  },
};
