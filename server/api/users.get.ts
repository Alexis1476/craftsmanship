export default defineEventHandler(async () => {
    return prisma.user.findFirst();
});