import org.rocksdb._

object testRocksdb extends App {
  override def main(args: Array[String]): Unit = {
    RocksDB.loadLibrary()
    val options: Options = new Options().setCreateIfMissing(true)
    val db: RocksDB = RocksDB.open(options, "/tmp/rocksdbScala")
    val key1 = "key1... working?".getBytes()
    val value1 = "value1... please?".getBytes()
    db.put(key1, value1)
    println("흠... " +  new String(db.get(key1)) + "-> 잘됬지?" )



  }
}
