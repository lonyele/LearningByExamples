
import com.neovisionaries.ws.client.WebSocketException
import com.neovisionaries.ws.client.WebSocketFrame
import io.github.sac.{BasicListener, Emitter, ReconnectStrategy, Socket}
import org.json.JSONObject
import java.util

object TestScalaVersion {
  val url = "ws://localhost:8000/socketcluster/"

  def main(arg: Array[String]): Unit = {
    val socket = new Socket(url)
    socket.setListener(new BasicListener {
      def onConnected(socket: Socket, headers: util.Map[String, util.List[String]]): Unit = {
        println("Connected to server")
        socket.emit("emitFromScala", "hellooooooo from scala")
      }

      def onDisconnected(socket: Socket, serverCloseFrame: WebSocketFrame, clientCloseFrame: WebSocketFrame, closedByServer: Boolean): Unit = {
        println("Disconnected from end-point")
      }

      def onConnectError(socket: Socket, exception: WebSocketException): Unit = {
        println("Got connect error " + exception)
      }

      def onAuthentication(socket: Socket, status: java.lang.Boolean): Unit = {  // 이거 java.lang.Boolean 하고 boolean 하고...   위에 import를 하면 안됨. 여기다가 이렇게 해야함. 충돌남.
        println("what the???")
        //        if (status) println("socket is authenticated")
        //        else println("Authentication is required (optional)")
      }

      def onSetAuthToken(token: String, socket: Socket): Unit = {
        socket.setAuthToken(token)
      }
    })
    socket.setReconnection(new ReconnectStrategy().setDelay(2000).setMaxAttempts(30))
    socket.connect()
    socket.disableLogging()
    socket.publish("user1", "스칼라에서 바로 publish로 채널로 보내는거")
    socket.on("SessionWindowSaved", new Emitter.Listener() {
      override def call(eventName: String, `object`: Any): Unit = { // Cast object to its proper datatype
        System.out.println("Got message for :" + eventName + `object`)
        socket.emit("emitFromScala", "스칼라에서 받고 바로 응답 ㄱㄱ from java")
      }
    })
    socket.on("sample", new Emitter.Listener() {
      override def call(eventName: String, data: Any): Unit = {
        System.out.println("sample!!! :" + eventName + data)
      }
    })
    socket.onSubscribe("sample", new Emitter.Listener() {
      override def call(name: String, data: Any): Unit = {
        val `object` = data.asInstanceOf[JSONObject]
        System.out.println("whatthe...." + `object`)
      }
    })
  }
}