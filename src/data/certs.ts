import type { Certification } from '../types';

export const CERTS: Record<string, Certification> = {
  c1: {
    icon: '🏅',
    title: 'DevOps Engineering Certification',
    org: 'Moringa School',
    status: 'done',
    year: 'Nov 2024',
    overview:
      'Intensive programme covering the full DevOps lifecycle — from cloud infrastructure provisioning and containerisation to CI/CD automation and production-grade monitoring. Hands-on with real AWS environments, Kubernetes clusters, and Terraform codebases throughout.',
    what: [
      'Designed and deployed multi-service applications on AWS EC2 and EKS',
      'Provisioned cloud infrastructure end-to-end using Terraform and Ansible',
      'Built Jenkins and GitHub Actions CI/CD pipelines with Docker image management',
      'Set up Prometheus and Grafana monitoring stacks with custom alerting rules',
      'Implemented GitOps workflows with ArgoCD across multiple environments',
      'Applied SRE practices including SLIs, SLOs, runbooks, and incident response',
    ],
    topics: ['AWS Cloud', 'Kubernetes', 'Terraform', 'Jenkins', 'Docker', 'Prometheus', 'Grafana', 'ArgoCD', 'SRE', 'CI/CD', 'Ansible', 'GitOps'],
  },
  c2: {
    icon: '🏅',
    title: 'Full-Stack Software Engineering',
    org: 'Moringa School',
    status: 'done',
    year: 'Nov 2024',
    overview:
      'End-to-end software engineering training covering frontend, backend, databases, and APIs. Built and shipped production-grade web applications using Python and React with Agile and collaborative workflows throughout the programme.',
    what: [
      'Built RESTful APIs using Python, Flask, and Django with authentication and rate limiting',
      'Developed responsive frontends using React with component-driven architecture',
      'Designed relational and non-relational database schemas (PostgreSQL, MongoDB)',
      'Implemented JWT-based auth, role management, and secure API practices',
      'Shipped multiple full-stack projects with test coverage using pytest and Jest',
      'Worked in Agile sprints with code reviews, Git collaboration, and CI pipelines',
    ],
    topics: ['Python', 'Flask', 'Django', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'JWT Auth', 'Git', 'Agile', 'Testing'],
  },
  c3: {
    icon: '☁️',
    title: 'AWS Solutions Architect Associate',
    org: 'Amazon Web Services',
    status: 'ongoing',
    year: 'Target: 2025',
    overview:
      'Industry-leading cloud certification validating the ability to design scalable, highly available, and cost-optimised distributed systems on AWS. Covers multi-tier architectures, networking, storage, security, and the Well-Architected Framework across all core AWS services.',
    what: [
      'Design resilient multi-AZ and multi-region architectures using EC2, EKS, and RDS',
      'Configure VPCs, subnets, security groups, NACLs, and Route 53 DNS routing',
      'Implement IAM policies, KMS encryption, and least-privilege access patterns',
      'Optimise costs using Reserved Instances, Spot Fleets, and S3 lifecycle policies',
      'Apply the AWS Well-Architected Framework across five pillars',
      'Architect serverless workloads with Lambda, API Gateway, SQS, and SNS',
    ],
    topics: ['EC2 / EKS', 'VPC Design', 'IAM', 'S3 / RDS', 'Route 53', 'CloudFront', 'Lambda', 'Well-Architected', 'Cost Optimisation', 'Auto Scaling', 'SQS / SNS', 'CloudWatch'],
  },
  c4: {
    icon: '⚙️',
    title: 'Certified Kubernetes Administrator',
    org: 'Cloud Native Computing Foundation',
    status: 'ongoing',
    year: 'Target: 2025',
    overview:
      'Performance-based exam validating real-world Kubernetes administration skills in a live cluster environment. No multiple choice — every task is hands-on in a terminal. Covers the full cluster lifecycle from installation to troubleshooting in production scenarios.',
    what: [
      'Bootstrap and configure production-grade Kubernetes clusters from scratch using kubeadm',
      'Manage workloads: Deployments, StatefulSets, DaemonSets, Jobs, and CronJobs',
      'Configure RBAC, ServiceAccounts, Network Policies, and Pod Security Standards',
      'Set up cluster networking with CNI plugins, Services, Ingress, and DNS (CoreDNS)',
      'Manage persistent storage with PVs, PVCs, StorageClasses, and volume types',
      'Diagnose and resolve cluster, node, and workload issues under exam conditions',
    ],
    topics: ['Cluster Setup', 'kubeadm', 'Workloads', 'RBAC', 'Network Policies', 'CoreDNS', 'Ingress', 'PV / PVC', 'StorageClasses', 'Troubleshooting', 'Security', 'Scheduling'],
  },
};
