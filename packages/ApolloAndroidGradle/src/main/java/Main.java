import com.apollographql.apollo.ApolloClient;
import okhttp3.OkHttpClient;

public class Main {

    private static final String BASE_URL = "https://localhost:1234/graphql";

    OkHttpClient okHttpClient = new OkHttpClient.Builder()
            .build();

    ApolloClient apolloClient = ApolloClient.builder()
        .serverUrl(BASE_URL)
        .okHttpClient(okHttpClient)
        .build();

}