const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const resolvers = {
    Query: {
        async watches(parent, args) {
            const first = args.first;
            if (first) {
                const watches = await prisma.watch.findMany({ take: first, where: { ATF: true } });
                return watches;
            }
            const watches = await prisma.watch.findMany();
            return watches;
        },
        async watch(parent, args) {
            const id = Number(args.id);
            const watch = await prisma.watch.findFirst({ where: { id } })
            return watch;
        }
    }
}

module.exports = { resolvers }