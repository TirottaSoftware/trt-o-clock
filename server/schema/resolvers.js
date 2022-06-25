const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const resolvers = {
    Query: {
        async watches() {
            // get the watches from prisma and return
            const watches = await prisma.watch.findMany();
            return watches
        },
        async watch(parent, args) {
            const id = Number(args.id);
            const watch = await prisma.watch.findFirst({ where: { id } })
            return watch;
        }
    }
}

module.exports = { resolvers }