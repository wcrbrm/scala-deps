# One-line Dependencies for Ammonite

For quick testing in REPL, this is the list of valid packages:

```
// Testing
import $ivy.`org.scalatest::scalatest:3.0.5` 
import $ivy.`org.scalacheck::scalacheck:1.14.0` 

# CATS
import $ivy.`org.typelevel:cats-macros:1.5.0`
import $ivy.`org.typelevel:cats-kernel:1.5.0`
import $ivy.`org.typelevel:cats-core:1.5.0`
import $ivy.`org.typelevel:cats-laws:1.5.0`
import $ivy.`org.typelevel:cats-free:1.5.0`
import $ivy.`org.typelevel:cats-testkit:1.5.0`
import $ivy.`org.typelevel:cats-effect:1.5.0`
import $ivy.`org.typelevel:cats-mtl:1.5.0`

# MONOCLE
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

// H2
import $ivy.`com.h2database:h2:1.4.197`

// Logging
import $ivy.`ch.qos.logback:logback-classic:1.2.3`
import $ivy.`com.typesafe.scala-logging::scala-logging:3.9.0`

// Circe JSON
import $ivy.`io.circe::circe-core:0.10.0`
import $ivy.`io.circe::circe-parser:0.10.0`
import $ivy.`io.circe::circe-generic:0.10.0`

// HTTP
import $ivy.`com.squareup.okhttp3:okhttp:3.12.1`

// AKKA Actors and Cluster
import $ivy.`com.typesafe.akka::akka-actor:2.5.16`
import $ivy.`com.typesafe.akka::akka-stream:2.5.16`
import $ivy.`com.typesafe.akka::akka-remote:2.5.16`
import $ivy.`com.typesafe.akka::akka-cluster:2.5.16`
import $ivy.`com.typesafe.akka::akka-cluster-metrics:2.5.16`
import $ivy.`com.typesafe.akka::akka-cluster-tools:2.5.16`
import $ivy.`com.typesafe.akka::akka-multi-node-testkit:2.5.16`

```
