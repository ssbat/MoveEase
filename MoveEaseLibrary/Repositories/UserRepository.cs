using MoveEaseLibrary.EF;
using MoveEaseLibrary.Entities;

namespace MoveEaseLibrary.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext dbContext;
        public UserRepository(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public User CreateUser(User user)
        {
            dbContext.Set<User>().Add(user);
            dbContext.SaveChanges();
            return user;
        }
    }
}
