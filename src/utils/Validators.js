class Validators {
  // Macapá
  static validateCellPhoneMacapa(cellphone) {
    if (!cellphone || cellphone.length > 20 || cellphone.length < 12) throw new Error("Unsupported cell phone format");

    if (cellphone.length == 13) {
      return `+${cellphone.substring(0, 2)} (${cellphone.substring(2, 4)}) ${cellphone.substring(4, 9)}-${cellphone.substring(9)}`;
    } else {
      return `+${cellphone.substring(0, 2)} (${cellphone.substring(2, 4)}) ${cellphone.substring(4, 8)}-${cellphone.substring(8)}`;
    }
  }

  static validateNameMacapa(name) {
    if (name.length > 200) throw new Error("The name is too long");
    return name.toUpperCase();
  }

  // Varejão
  static validateCellPhoneVarejao(cellphone) {
    let formatted = cellphone.replace(/\D/g, "");
    if (formatted.length > 13 || formatted.length < 12) throw new Error("Unsupported cell phone format");
    return formatted;
  }

  static validateNameVarejao(name) {
    if (name.length > 100) throw new Error("The name is too long");
    return name;
  }
}

module.exports = Validators;
