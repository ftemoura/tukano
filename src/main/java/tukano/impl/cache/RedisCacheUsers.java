package tukano.impl.cache;

import tukano.api.Result;
import tukano.api.User;
import utils.JSON;

import static java.lang.String.format;

public class RedisCacheUsers extends RedisCache implements UsersCache {

    private static final int USERS_TTL = 3600;
    private static final String SHORT_KEY = "user:";


    @Override
    public void cacheUser(User user) {
        String cacheKey = SHORT_KEY + user.getUserId();
        super.setKeyValue(cacheKey, JSON.encode(user), user.getLastModified(), USERS_TTL);
    }

    @Override
    public void deleteUser(String userId) {
        String cacheKey = SHORT_KEY + userId;
        super.deleteKey(cacheKey);
    }

    @Override
    public Result<User> getUser(String userId) {
        String cacheKey = SHORT_KEY + userId;
        Result<String> res = super.getKeyValue(cacheKey);
        if (!res.isOK())
            return Result.error(res.error());
        return Result.ok(JSON.decode(res.value(), User.class));
    }

    @Override
    public Result<Void> invalidateAllUserInfo(String userId) {
        String pattern = format("*%s*", userId);
        return super.deleteKeysByPattern(pattern);
    }
}
