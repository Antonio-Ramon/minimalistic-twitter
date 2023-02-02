import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Criar um novo usuário
  const user = await prisma.user.create({
    data: {
      email: "tony@dev.com",
      username: "tonyDev",
    },
  });

  console.log("New User");
  console.log(user);

  // Criar um novo tweet e linkar ao novo usuário
  const tweet = await prisma.tweet.create({
    data: {
      text: "Ele separou o caminho da sabedoria para os justos; Ele mesmo protege e guarda o caminho por onde os justos devem andar.proverbios 2:8",
      userId: user.id,
    },
  });

  console.log("First Tweet");
  console.log(tweet);

  // retorna todos os tweets ja escritos
  const userList = await prisma.user.findMany();

  console.log("Usuários com Tweets");
  console.dir(userList);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
