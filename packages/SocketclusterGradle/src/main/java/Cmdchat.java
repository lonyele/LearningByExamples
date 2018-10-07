
import com.neovisionaries.ws.client.WebSocketException;
import com.neovisionaries.ws.client.WebSocketFrame;
import io.github.sac.BasicListener;
import io.github.sac.Emitter;
import io.github.sac.Socket;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;
import java.util.Map;
import java.util.Scanner;

/**
 * Created by sachin on 12/12/16.
 */
public class Cmdchat {

    enum e{
        MESSAGE,
        USER
    }
    public static String url="ws://localhost:8000/socketcluster/";
    private static String user;

    public static void main(String arg[]) throws JSONException, InterruptedException {

        user = "taeheon";
        Socket socket = new Socket(url);

        socket.setListener(new BasicListener() {
            public void onConnected(Socket socket, Map<String, List<String>> headers) {
                socket.createChannel("SessionWindowSaved").subscribe();
                socket.createChannel("sample").subscribe();
                System.out.println("Connected to server");
                socket.emit("emitFromJava", "hellooooooo from java");
            }

            public void onDisconnected(Socket socket, WebSocketFrame serverCloseFrame, WebSocketFrame clientCloseFrame, boolean closedByServer) {
                System.out.println("Disconnected from end-point");

            }

            public void onConnectError(Socket socket, WebSocketException exception) {
                System.out.println("Got connect error " + exception);

            }

            public void onAuthentication(Socket socket, Boolean status) {
                if (status) {
                    System.out.println("socket is authenticated");
                } else {
                    System.out.println("Authentication is required (optional)");
                }

            }

            public void onSetAuthToken(String token, Socket socket) {
                socket.setAuthToken(token);
            }
        });

        socket.connect();
        socket.disableLogging();
        socket.publish("user1", "자바에서 바로 publish로 채널로 보내는거");
        socket.on("SessionWindowSaved", new Emitter.Listener() {
            public void call(String eventName,Object object) {
                // Cast object to its proper datatype
                System.out.println("Got message for :" + eventName + object);
                socket.emit("emitFromJava", "자바에서 받고 바로 응답 ㄱㄱ from java");
            }
        });
        socket.on("sample", new Emitter.Listener() {
            public void call(String eventName,Object data) {
                // Cast object to its proper datatype
                System.out.println("sample!!! :" + eventName + data);
            }
        });
        socket.onSubscribe("sample", new Emitter.Listener() {
            @Override
            public void call(String name, Object data) {
                JSONObject object= (JSONObject) data;
                System.out.println("whatthe...." + object);
//                try {
//                    String username=object.getString("user");
//                    String message=object.getString("message");
//                    if (e.MESSAGE == object.get("type")){
//                        System.out.println(username+" :: "+message);
//                    }
//                } catch (JSONException e) {
//                    e.printStackTrace();
//                }
            }
        });

        while (true){
            String message="message what the fuck?";
            JSONObject object=new JSONObject();
            object.put("user",user);
            object.put("message",message);
            object.put("type",e.MESSAGE);

            //socket.getChannelByName("SessionWindowSaved").publish(object);
            //socket.getChannelByName("sample").publish("what the fuck??? from java");

        }

    }
}