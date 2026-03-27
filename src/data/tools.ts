import type { ToolGroup } from '../types';

export const TOOL_GROUPS: ToolGroup[] = [
  {
    label: 'Cloud & Infrastructure',
    tools: [
      'AWS', 'EKS', 'EC2', 'VPC', 'S3', 'Route 53', 'IAM', 'RDS', 'Lambda',
      'CloudFormation', 'ALB/NLB', 'CloudFront', 'KMS', 'Transit Gateway', 'MSK',
      'Terraform', 'Ansible', 'Kubernetes', 'Docker', 'Helm',
    ],
  },
  {
    label: 'Workflow Orchestration & CI/CD',
    tools: [
      'Temporal.io', 'Jenkins', 'GitHub Actions', 'ArgoCD',
      'Blue-Green / Canary', 'GitOps', 'Tekton',
    ],
  },
  {
    label: 'Observability & Networking',
    tools: [
      'Prometheus', 'Grafana', 'Loki', 'OpenTelemetry', 'Jaeger', 'ELK Stack',
      'eBPF', 'Apache Kafka', 'Debezium CDC', 'BGP Failover', 'AWS Transit Gateway',
    ],
  },
  {
    label: 'Programming & Development',
    tools: [
      'Python', 'C (eBPF)', 'Bash', 'TypeScript', 'FastAPI', 'Flask', 'Django',
      'React', 'REST APIs', 'GraphQL', 'SQL', 'NoSQL',
    ],
  },
  {
    label: 'Security & Policy',
    tools: [
      'HashiCorp Vault', 'OPA / Rego', 'OPA Gatekeeper', 'Trivy', 'Semgrep',
      'Syft (SBOM)', 'IAM Least-Privilege', 'VPC Segmentation', 'KMS/TLS', 'WAF', 'NetworkPolicy',
    ],
  },
  {
    label: 'Chaos Engineering & Reliability',
    tools: [
      'Chaos Mesh', 'Litmus Chaos', 'Pod Kill / Net Latency / CPU Stress',
      'SLI/SLO/Error Budget', 'Multi-Window Alerting', 'DORA Metrics', 'Blast Radius Analysis',
    ],
  },
  {
    label: 'Data & AI Layer',
    tools: [
      'PostgreSQL', 'pgvector', 'Neo4j', 'Redis', 'MongoDB',
      'Anthropic Claude API', 'LLM Prompt Engineering', 'Incident Embeddings',
    ],
  },
];
