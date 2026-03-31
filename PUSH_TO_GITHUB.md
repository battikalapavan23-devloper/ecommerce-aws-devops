# 📤 How to Push This Project to GitHub

Follow these steps to get everything into your GitHub repository.

---

## Step 1 — Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ecommerce-aws-devops`
3. Set to **Public** or **Private**
4. Do NOT initialize with README (we have one)
5. Click **Create repository**

---

## Step 2 — Initialize Git & Push

Open a terminal in the project folder and run:

```bash
cd ecommerce-aws-devops

git init
git add .
git commit -m "feat: initial e-commerce AWS DevOps project"

git remote add origin https://github.com/YOUR_USERNAME/ecommerce-aws-devops.git
git branch -M main
git push -u origin main
```

---

## Step 3 — Create the `develop` Branch

```bash
git checkout -b develop
git push -u origin develop
```

---

## Step 4 — Add GitHub Secrets

Go to your repo → **Settings → Secrets and variables → Actions → New repository secret**

Add each of these:

| Secret Name | Value |
|---|---|
| `AWS_ACCESS_KEY_ID` | Your AWS access key |
| `AWS_SECRET_ACCESS_KEY` | Your AWS secret key |
| `AWS_REGION` | e.g. `us-east-1` |
| `AWS_ACCOUNT_ID` | Your 12-digit AWS account ID |
| `ECR_REPOSITORY_FRONTEND` | e.g. `ecommerce-frontend` |
| `ECR_REPOSITORY_BACKEND` | e.g. `ecommerce-backend` |
| `ECS_CLUSTER_NAME` | e.g. `ecommerce-cluster` |
| `ECS_SERVICE_FRONTEND` | e.g. `ecommerce-frontend-service` |
| `ECS_SERVICE_BACKEND` | e.g. `ecommerce-backend-service` |
| `DB_PASSWORD` | Your RDS password |
| `BACKEND_URL` | e.g. `https://api.yourdomain.com` |

---

## Step 5 — Provision AWS Infrastructure

```bash
cd infrastructure/terraform
terraform init
terraform apply \
  -var="environment=staging" \
  -var="db_password=YOUR_SECURE_PASSWORD"
```

---

## Step 6 — Trigger CI/CD

- Push to `develop` → auto-deploys to **staging**
- Open a Pull Request → CI tests run automatically
- Merge to `main` → auto-deploys to **production**
- Go to **Actions → Rollback** to manually roll back any service

---

## 🎉 Done!

Your e-commerce app is live on AWS ECS with full CI/CD!
