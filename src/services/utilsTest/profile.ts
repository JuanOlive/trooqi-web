// users.ts
type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    bio: string;
    avatar: string; // Caminho da imagem
  };
  
  // Lista de usuários (dados temporários)
  const users: User[] = [
    {
      id: 1,
      name: "João Silva",
      email: "joao.silva@example.com",
      age: 25,
      bio: "Apaixonado por tecnologia e desenvolvimento de software.",
      avatar: "/images/profile1.png",
    },
    {
      id: 2,
      name: "Maria Oliveira",
      email: "maria.oliveira@example.com",
      age: 30,
      bio: "Entusiasta de design e fotografia.",
      avatar: "/images/profile2.png",
    },
    {
      id: 3,
      name: "Carlos Souza",
      email: "carlos.souza@example.com",
      age: 22,
      bio: "Estudante de Engenharia de Software.",
      avatar: "/images/profile3.png",
    },
  ];
  
  export default users;