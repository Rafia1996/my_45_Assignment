function make_shirt(size, printmessage) {
    if (size === void 0) { size = "large"; }
    if (printmessage === void 0) { printmessage = "I Love typsript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printmessage, " print on shirt"));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I Love javascript");
