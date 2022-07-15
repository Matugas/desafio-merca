const Validators = require("../src/utils/Validators");

describe("Macapá", () => {
  test("Converte nome para maiúsculo", () => {
    const nome = "nome teste";
    const nomeValidado = Validators.validateNameMacapa(nome);
    expect(nomeValidado).toBe("NOME TESTE");
  });

  test("Exceção com nome maior que 200 caracteres", () => {
    const nome = "01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789 ABC";
    expect(() => {
      Validators.validateNameMacapa(nome);
    }).toThrow("The name is too long");
  });

  test("Converte número de celular para formato esperado", () => {
    const celular = "5541996941919";
    const celularValidado = Validators.validateCellPhoneMacapa(celular);
    expect(celularValidado).toBe("+55 (41) 99694-1919");
  });

  test("Exceção com número de celular null", () => {
    const celular = null;
    expect(() => {
      Validators.validateCellPhoneMacapa(celular);
    }).toThrow("Unsupported cell phone format");
  });

  test("Exceção com número de celular somente letras", () => {
    const celular = "ABCDEFGHIJKLM";
    expect(() => {
      Validators.validateCellPhoneMacapa(celular);
    }).toThrow("Unsupported cell phone format");
  });

  test("Exceção com número de celular pequeno", () => {
    const celular = "123456";
    expect(() => {
      Validators.validateCellPhoneMacapa(celular);
    }).toThrow("Unsupported cell phone format");
  });

  test("Exceção com número de celular grande demais", () => {
    const celular = "01234567890123456789";
    expect(() => {
      Validators.validateCellPhoneMacapa(celular);
    }).toThrow("Unsupported cell phone format");
  });
});

describe("Varejão", () => {
  test("Mantém nome igual", () => {
    const nome = "nome teste";
    const nomeValidado = Validators.validateNameVarejao(nome);
    expect(nomeValidado).toBe(nome);
  });

  test("Exceção com nome maior que 100 caracteres", () => {
    const nome = "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789 ABC";
    expect(() => {
      Validators.validateNameVarejao(nome);
    }).toThrow("The name is too long");
  });

  test("Mantém número de celular igual", () => {
    const celular = "5541996941919";
    const celularValidado = Validators.validateCellPhoneVarejao(celular);
    expect(celularValidado).toBe(celular);
  });

  test("Exceção com número de celular null", () => {
    const celular = null;
    expect(() => {
      Validators.validateCellPhoneVarejao(celular);
    }).toThrow("Unsupported cell phone format");
  });

  test("Exceção com número de celular somente letras", () => {
    const celular = "ABCDEFGHIJKLM";
    expect(() => {
      Validators.validateCellPhoneVarejao(celular);
    }).toThrow("Unsupported cell phone format");
  });

  test("Exceção com número de celular pequeno", () => {
    const celular = "123456";
    expect(() => {
      Validators.validateCellPhoneVarejao(celular);
    }).toThrow("Unsupported cell phone format");
  });

  test("Exceção com número de celular grande demais", () => {
    const celular = "01234567890123456789";
    expect(() => {
      Validators.validateCellPhoneVarejao(celular);
    }).toThrow("Unsupported cell phone format");
  });
});
