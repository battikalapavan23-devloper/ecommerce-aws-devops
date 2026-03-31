# 🛒 E-Commerce Platform — AWS DevOps Stack

A production-ready e-commerce application with full AWS DevOps toolchain: Docker containers, ECS/ECR, Terraform IaC, and GitHub Actions CI/CD pipelines.

---

## 🏗️ Architecture Overview

```
GitHub → GitHub Actions → ECR (Docker Images) → ECS Fargate (App) → ALB → Users
                       ↓
              CodePipeline / CodeBuild (AWS-native CI)
                       ↓
              Terraform (Infrastructure as Code)
```

---

## 📁 Project Structure

```
ecommerce-aws-devops/
├── frontend/               # React frontend (Node.js)
│   └── src/
│       ├── components/     # Reusable UI components
│       └── pages/          # Route pages
├── backend/                # Node.js/Express API
│   └── src/
│       ├── routes/
│       ├── controllers/
│       └── models/
├── infrastructure/
│   ├── terraform/          # AWS infra (VPC, ECS, RDS, ALB)
│   └── cloudformation/     # CloudFormation alternative stacks
├── docker/                 # Dockerfiles for each service
├── .github/workflows/      # GitHub Actions CI/CD pipelines
└── scripts/                # Helper deploy/rollback scripts
```

---

## 🚀 Quick Start

### Prerequisites
- AWS CLI configured (`aws configure`)
- Docker Desktop installed
- Terraform >= 1.5
- Node.js >= 18

### 1. Clone & Install
```bash
git clone https://github.com/YOUR_USERNAME/ecommerce-aws-devops.git
cd ecommerce-aws-devops
```

### 2. Set environment variables
```bash
cp .env.example .env
# Edit .env with your AWS account details
```

### 3. Provision AWS Infrastructure
```bash
cd infrastructure/terraform
terraform init
terraform plan
terraform apply
```

### 4. Build & Push Docker Images
```bash
chmod +x scripts/build-push.sh
./scripts/build-push.sh
```

### 5. Deploy to ECS
```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

---

## 🔧 AWS Services Used

| Service | Purpose |
|---------|---------|
| **ECS Fargate** | Run containerized app (serverless containers) |
| **ECR** | Private Docker image registry |
| **ALB** | Load balancer + HTTPS termination |
| **RDS (PostgreSQL)** | Managed database |
| **VPC** | Isolated network with public/private subnets |
| **IAM** | Roles & permissions |
| **Secrets Manager** | Store DB credentials & API keys |
| **CloudWatch** | Logs, metrics, alarms |
| **CodePipeline** | AWS-native CI/CD pipeline |
| **CodeBuild** | Build & test runner |

---

## ⚙️ GitHub Actions Workflows

| Workflow | Trigger | Action |
|----------|---------|--------|
| `ci.yml` | Every PR | Lint, test, build Docker image |
| `deploy-staging.yml` | Push to `develop` | Deploy to staging ECS |
| `deploy-prod.yml` | Push to `main` | Deploy to production ECS |
| `terraform.yml` | Changes in `infrastructure/` | Terraform plan/apply |
| `rollback.yml` | Manual trigger | Rollback ECS to previous version |

---

## 🌍 Environments

| Environment | Branch | URL |
|-------------|--------|-----|
| Staging | `develop` | `staging.yourdomain.com` |
| Production | `main` | `yourdomain.com` |

---

## 🔐 Required GitHub Secrets

Add these in **Settings → Secrets → Actions**:

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
AWS_ACCOUNT_ID
ECR_REPOSITORY_FRONTEND
ECR_REPOSITORY_BACKEND
ECS_CLUSTER_NAME
ECS_SERVICE_FRONTEND
ECS_SERVICE_BACKEND
DB_PASSWORD
```

---

## 📦 Local Development with Docker Compose

```bash
docker-compose up --build
```
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- pgAdmin: http://localhost:5050

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'feat: add your feature'`
3. Push: `git push origin feature/your-feature`
4. Open a Pull Request → CI runs automatically

---

## 📄 License

MIT License — feel free to use for your own projects.
