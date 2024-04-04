const database = require("mongoose");
const is_qoddi = process.env.IS_QODDI || false;
const databaseName = "lab_example";
const qoddiURI =
  "mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.mmhwhm3.mongodb.net/" +
  databaseName +
   "?retryWrites=true&w=majority&appName=Cluster0";
const localURI =
"mongodb://127.0.0.1/" + databaseName + "?authSource=admin&retryWrites=true&w=majority";
if (is_qoddi) {
  database.connect(qoddiURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  database.connect(localURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
