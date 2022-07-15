class Validators {
  // Macapá
  static validateCellPhoneMacapa(cellphone) {
    if (!cellphone) throw new Error("Unsupported cell phone format");
    let formatted = cellphone.replace(/\D/g, "");
    if (formatted.length > 13 || formatted.length < 12) throw new Error("Unsupported cell phone format");

    if (formatted.length == 13) {
      return `+${formatted.substring(0, 2)} (${formatted.substring(2, 4)}) ${formatted.substring(4, 9)}-${formatted.substring(9)}`;
    } else {
      return `+${formatted.substring(0, 2)} (${formatted.substring(2, 4)}) ${formatted.substring(4, 8)}-${formatted.substring(8)}`;
    }
  }

  static validateNameMacapa(name) {
    if (name.length > 200) throw new Error("The name is too long");
    return name.toUpperCase();
  }

  // Varejão
  static validateCellPhoneVarejao(cellphone) {
    if (!cellphone) throw new Error("Unsupported cell phone format");
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
