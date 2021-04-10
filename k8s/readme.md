### Iniciar API

```sh
kubectl apply -f backend/deployment.yaml
kubectl expose -f backend/deployment.yaml
kubectl port-forward service/exercicio03-backend 3000
```

### Iniciar frontend

```sh
kubectl apply -f frontend/deployment.yaml
kubectl expose -f frontend/deployment.yaml
kubectl port-forward service/exercicio03-frontend 3001:3000
```

Acessar http://localhost:3001