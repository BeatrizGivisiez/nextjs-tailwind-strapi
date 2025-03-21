# 🚀 Frontend Architecture  

Este repositório segue uma arquitetura organizada para um projeto Next.js, separando páginas, módulos e componentes globais.  

## 📂 Estrutura  

```
/src
  ├── app/              # SSR - Páginas e layouts principais
  │   ├── quem-somos/   # Página específica
  │   ├── respostas-sociais/
  │   ├── favicon.ico
  │   ├── globals.css   # Estilos globais
  │   ├── layout.tsx    # Layout base da aplicação
  │   └── page.tsx      # Página principal
  │
  ├── components/       # Componentes globais estilizados com Tailwind CSS
  │   ├── Button.tsx
  │   ├── Header.tsx
  │   ├── Footer.tsx
  │   └── ...
  │
  ├── modules/          # Funcionalidades construídas no client-side
      ├── auth/
      ├── dashboard/
      ├── ...
```

---

## 🏗️ Como essa arquitetura funciona?  

### 📌 **App (SSR - Server-Side Rendering)**  
A pasta `app/` contém todas as páginas e layouts principais do projeto. Ela usa SSR (Server-Side Rendering) para melhor performance e SEO.  

- O `layout.tsx` define a estrutura global das páginas.  
- O `globals.css` contém os estilos globais.  
- Cada subpasta representa uma página com seus arquivos `.tsx`.  

### 📌 **Components (Globais & Estilizados com Tailwind CSS)**  
A pasta `components/` contém componentes reutilizáveis, como botões, headers e footers.  

- Todos os componentes são estilizados com Tailwind CSS.  
- Eles são utilizados dentro dos módulos e páginas para manter a consistência visual.  

### 📌 **Modules (Client-Side Components)**  
A pasta `modules/` contém funcionalidades específicas que rodam no client-side.  

- Cada módulo pode ter suas próprias subpastas e componentes internos.  
- Os módulos puxam componentes globais e podem ser usados dentro das páginas do `app/`.  

---

## 🛠️ Como rodar o projeto?  

1. Clone o repositório:  
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```  

2. Instale as dependências:  
   ```sh
   npm install
   # ou
   yarn install
   ```  

3. Inicie o servidor de desenvolvimento:  
   ```sh
   npm run dev
   # ou
   yarn dev
   ```  

4. Acesse `http://localhost:3000` no navegador.  

---

## 🎨 Estilização  

- O projeto usa **Tailwind CSS** para estilização rápida e eficiente.  
- Os estilos globais estão em `globals.css`, mas cada componente pode ter classes do Tailwind aplicadas diretamente.  

---

## 📌 Boas práticas  

- **Mantenha os componentes reutilizáveis na pasta `components/`.**  
- **Use SSR apenas onde necessário (app/), e client-side rendering nos módulos (`modules/`).**  
- **Mantenha a estilização consistente com Tailwind CSS.**  

---