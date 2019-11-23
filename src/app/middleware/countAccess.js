let contador = 0;

export default async (req, res, next) => {
  contador += 1;
  console.log(`Já foram acessadas ${contador} vezes`);
  return next();
};
