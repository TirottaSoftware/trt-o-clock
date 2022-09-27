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
        async watches(parent, args) {
            const first = args.first;
            const brand = args.brand;
            const color = args.color;

            let filter = {}
            if (brand) {
                filter.brand = brand;
            }
            if (color) {
                filter.color = color;
            }
            if (!color && !brand) {
                const watches = await prisma.watch.findMany();
                return watches;
            }

            if (first) {
                const watches = await prisma.watch.findMany({ take: first, where: filter });
                return watches;
            }
            else {
                const watches = await prisma.watch.findMany({ where: filter });
                return watches;
            }


        },
        async watch(parent, args) {
            const id = Number(args.id);
            const watch = await prisma.watch.findFirst({ where: { id } })
            return watch;
        }
    }
}

module.exports = { resolvers }