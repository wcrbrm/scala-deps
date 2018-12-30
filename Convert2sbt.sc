val filename = "./Ammonite.md"
val output = "./Sbt.md"

def toSBT(x: String): Option[String] = {
  val isScala = x.contains("::")
  val arr: Array[String] = x.replace("::", ":").split(":").map(x => '"' + x + '"')
  if (arr.length == 3) {
     Some("\t" + arr(0) + (if (isScala) " %% " else " % ") + arr(1) + " % " + arr(2))
  } else {
     None
  }
}

val regex = """`([^`]+)`""".r
val result = scala.io.Source.fromFile(filename).getLines.map { input =>
  (for (next <- regex.findAllIn(input)) yield next.replace("`", "")).toList
}.flatten.toList.flatMap(toSBT).mkString(",\n")


val pw = new java.io.PrintWriter(new java.io.File(output))
pw.write("// this file is read only and generated from Ammonite.md")
pw.write(result)
pw.close


println( result )