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
            const sort = args.sort;

            let whereFilter = {};
            let orderFilter = {};

            if (brand) {
                whereFilter.brand = brand;
            }
            if (color) {
                whereFilter.color = color;
            }
            if (sort) {
                orderFilter[sort.field] = sort.order.toLowerCase();
            }
            console.log("Sorting Filter: ", orderFilter)
            if (!color && !brand) {
                const watches = await prisma.watch.findMany({ orderBy: orderFilter });
                return watches;
            }

            if (first) {
                // const watches = await prisma.watch.findMany({ take: first, where: whereFilter });
                const watches = await prisma.watch.findMany({ take: first, where: filter, orderBy: orderFilter });
                return watches;
            }
            else {
                const watches = await prisma.watch.findMany({ where: whereFilter, orderBy: orderFilter });
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