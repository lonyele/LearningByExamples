import org.rocksdb.*;
//import org.rocksdb.Options;

        // a static method that loads the RocksDB C++ library.

public class testRocksdb {
    public static void main(String args[]) {
        RocksDB.loadLibrary();
        System.out.println("여기 들어오는거냐?1");
        // the Options class contains a set of configurable DB options
        // that determines the behaviour of the database.
        try (final Options options = new Options().setCreateIfMissing(true)) {
            System.out.println("여기 들어오는거냐?2");
            // a factory method that returns a RocksDB instance
            try (final RocksDB db = RocksDB.open(options, "/tmp/testdb")) {
                System.out.println("여기 들어오는거냐?3");
                // do something

                byte[] key1 = "key1111".getBytes();
                byte[] value1 = "key1111의 value".getBytes();
                byte[] key2 = "key2222".getBytes();
                byte[] value2 = "key2222의 value".getBytes();

                try {
                    db.put(key1, value1);
                } catch (RocksDBException e) {
                    // error handling
                }
                try {
                    final byte[] value = db.get(key1);
                    if (value != null) {  // value == null if key1 does not exist in db.
                        System.out.println("흠.. value는"+ new String(value));
                    }

                } catch (RocksDBException e) {
                    // error handling
                }

            }

        } catch (RocksDBException e) {
            // do some error handling
            System.out.println("여기 들어오는거냐?4");
        }

    }

}

