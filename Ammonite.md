# One-line Dependencies for Ammonite

For quick testing in REPL, this is the list of valid packages:

```
// Testing
import $ivy.`org.scalatest::scalatest:3.0.5` 
import $ivy.`org.scalactic::scalactic:3.0.5` 
import $ivy.`org.scalacheck::scalacheck:1.14.0` 

// SCALA MACROS
import $ivy.`org.scalamacros::paradise:2.1.0-M5`

// CATS
import $ivy.`org.typelevel::cats-macros:1.5.0`
import $ivy.`org.typelevel::cats-kernel:1.5.0`
import $ivy.`org.typelevel::cats-core:1.5.0`
import $ivy.`org.typelevel::cats-laws:1.5.0`
import $ivy.`org.typelevel::cats-free:1.5.0`
import $ivy.`org.typelevel::cats-testkit:1.5.0`
import $ivy.`org.typelevel::cats-effect:1.5.0`
import $ivy.`org.typelevel::cats-mtl:1.5.0`

// MONOCLE
import $ivy.`com.github.julien-truffaut::monocle-core:1.5.0`
import $ivy.`com.github.julien-truffaut::monocle-macro:1.5.0`
import $ivy.`com.github.julien-truffaut::monocle-law:1.5.0`

// Li Hao Yi
import $ivy.`com.lihaoyi::ujson:0.7.1`
import $ivy.`com.lihaoyi::ammonite-ops:1.4.4`

// Slick
import $ivy.`org.slf4j:slf4j-nop:1.6.4`
import $ivy.`com.typesafe.slick::slick:3.2.3`
import $ivy.`com.typesafe.slick::slick-hikaricp:3.2.3`
import $ivy.`com.byteslounge::slick-repo:1.5.2`

// Postgres
import $ivy.`com.github.tminglei::slick-pg:0.17.0`
import $ivy.`com.github.tminglei::slick-pg_spray-json:0.17.0`
import $ivy.`ru.yandex.qatools.embed::postgresql-embedded:2.2`

// MySQL
import $ivy.`org.scalikejdbc::scalikejdbc:2.5.2`
import $ivy.`mysql:mysql-connector-java:8.0.11`

// H2
import $ivy.`com.h2database:h2:1.4.197`

// Logging
import $ivy.`ch.qos.logback:logback-classic:1.2.3`
import $ivy.`com.typesafe.scala-logging::scala-logging:3.9.0`

// Circe JSON
import $ivy.`io.circe::circe-core:0.10.0`
import $ivy.`io.circe::circe-parser:0.10.0`
import $ivy.`io.circe::circe-generic:0.10.0`

// Json4s
import $ivy.`org.json4s::json4s-native:3.6.0-M3`
import $ivy.`org.json4s::json4s-jackson:3.6.0-M3`

// HTTP
import $ivy.`com.squareup.okhttp3:okhttp:3.12.1`

// AKKA HTTP
import $ivy.`com.typesafe.akka::akka-http:10.1.1`
import $ivy.`com.typesafe.akka::akka-http-spray-json:10.1.1`
import $ivy.`com.typesafe.akka::akka-http-caching:10.1.1`
import $ivy.`com.typesafe.akka::akka-http-testkit:10.1.1`

// AKKA Actors and Cluster
import $ivy.`com.typesafe.akka::akka-actor:2.5.16`
import $ivy.`com.typesafe.akka::akka-stream:2.5.16`
import $ivy.`com.typesafe.akka::akka-remote:2.5.16`
import $ivy.`com.typesafe.akka::akka-cluster:2.5.16`
import $ivy.`com.typesafe.akka::akka-cluster-metrics:2.5.16`
import $ivy.`com.typesafe.akka::akka-cluster-tools:2.5.16`
import $ivy.`com.typesafe.akka::akka-multi-node-testkit:2.5.16`

// CONFIG
import $ivy.`com.typesafe:config:1.3.0`

// LEVEL DB:
import $ivy.`org.iq80.leveldb:leveldb:0.10`
import $ivy.`org.fusesource.leveldbjni:leveldbjni-all:1.8`

// ARGONAUT
import $ivy.`io.argonaut::argonaut:6.2`
import $ivy.`io.argonaut::argonaut-scalaz:6.2`
import $ivy.`io.argonaut::argonaut-monocle:6.2`
import $ivy.`io.argonaut::argonaut-cats:6.2`
import $ivy.`com.github.alexarchambault::argonaut-shapeless_6.1:1.1.1`

// COMPRESS
import $ivy.`org.apache.commons:commons-compress:1.16.1`

// PDF
import $ivy.`com.itextpdf:itextpdf:5.5.10`
import $ivy.`org.apache.pdfbox:pdfbox:2.0.4`

// JODA
import $ivy.`joda-time:joda-time:2.7`

// QR
import $ivy.`com.google.zxing:core:3.3.3`
import $ivy.`com.google.zxing:javase:3.3.3`

// APACHE SPARK
import $ivy.`org.apache.spark::spark-core:1.2.0`
import $ivy.`org.apache.spark::spark-streaming:1.2.0`
import $ivy.`org.apache.spark::spark-streaming-twitter_2.10:1.2.0`

// APACHE FLINK
import $ivy.`org.apache.flink::flink-scala:1.7.1`
import $ivy.`org.apache.flink::flink-streaming-scala:1.7.1`

// KAFKA STREAMS
import $ivy.`com.lightbend::kafka-streams-scala:0.2.1`

// CASSANDRA
import $ivy.`com.datastax.cassandra:cassandra-driver-core:3.6.0`
import $ivy.`com.datastax.cassandra:cassandra-driver-mapping:3.6.0`
import $ivy.`com.datastax.cassandra:cassandra-driver-extras:3.6.0`
import $ivy.`com.lightbend.akka::akka-stream-alpakka-cassandra:1.0-M1`

// DYNAMODB
import $ivy.`com.amazonaws:aws-java-sdk-dynamodb:1.11.479`
import $ivy.`com.lightbend.akka::akka-stream-alpakka-dynamodb:1.0-M1`

// HDFS - HADOOP
import $ivy.`com.lightbend.akka::akka-stream-alpakka-hdfs:1.0-M1`

// ETCD
import $ivy.`com.github.mingchuno::etcd4s-core:0.1.4`
import $ivy.`com.github.mingchuno::etcd4s-akka-stream:0.1.4`

// BOUNCY CASTLE
import $ivy.`org.bouncycastle:bcprov-jdk15on:1.56`

// SPONGY CASTLE
import $ivy.`com.madgag.spongycastle:core:1.53.0.0`
import $ivy.`com.madgag.spongycastle:prov:1.53.0.0`

// SHAPELESS
import $ivy.`com.chuusai::shapeless:2.3.3`

// SSH
import $ivy.`fr.janalyse::janalyse-ssh:0.1.3`

// JSOUP (html parsing)
import $ivy.`org.jsoup:jsoup:1.11.3`

// RETROFIT (HTTP)
import $ivy.`com.squareup.retrofit2:retrofit:2.5.0`

// BITCOIN LIBS```
import $ivy.`fr.acinq::bitcoin-lib:0.9.17`
import $ivy.`org.bitcoinj:bitcoinj-core:0.14.7`
import $ivy.`cash.bitcoinj:bitcoinj-core:0.14.5.2`

// TENSORFLOW
import $ivy.`org.platanios::tensorflow:0.4.1`
import $ivy.`org.platanios::tensorflow-data:0.4.1`
import $ivy.`org.platanios::tensorflow-example:0.4.1`


