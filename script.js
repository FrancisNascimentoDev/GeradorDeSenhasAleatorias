// Função para gerar uma senha aleatória com base nas opções
function generatePassword() {
    const length = parseInt(document.getElementById("password-length").value); // Comprimento
    const includeNumbers = document.getElementById("include-numbers").checked;
    const includeSpecial = document.getElementById("include-special").checked;
    const includeUppercase = document.getElementById("include-uppercase").checked;
    const includeLowercase = document.getElementById("include-lowercase").checked;
    const excludeAmbiguous = document.getElementById("exclude-ambiguous").checked;
    const customSymbols = document.getElementById("custom-symbols").value;

    let charset = "";
    let ambiguousChars = "Il1O0"; // Caracteres ambíguos que podem ser excluídos

    // Se incluir números
    if (includeNumbers) charset += "0123456789";
    
    // Se incluir caracteres especiais
    if (includeSpecial) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    
    // Se incluir letras maiúsculas
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    // Se incluir letras minúsculas
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    
    // Se incluir símbolos personalizados
    if (customSymbols) charset += customSymbols;

    // Excluir caracteres ambíguos se a opção estiver ativada
    if (excludeAmbiguous) {
        charset = charset.split('').filter(c => !ambiguousChars.includes(c)).join('');
    }

    if (charset === "") {
        alert("Por favor, selecione pelo menos uma opção para gerar a senha.");
        return;
    }

    // Gerar senha
    let password = "";
    let passwordRequirements = {
        hasNumber: !includeNumbers,
        hasSpecial: !includeSpecial,
        hasUppercase: !includeUppercase,
        hasLowercase: !includeLowercase,
    };

    // Garantir que a senha tenha pelo menos um caractere de cada tipo selecionado
    if (includeNumbers) password += "0"; // Garantir número
    if (includeSpecial) password += "!"; // Garantir caractere especial
    if (includeUppercase) password += "A"; // Garantir maiúscula
    if (includeLowercase) password += "a"; // Garantir minúscula

    // Preencher a senha com caracteres aleatórios
    for (let i = password.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // Embaralhar a senha gerada
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    document.getElementById("password").value = password;

    // Verificar a força da senha
    checkPasswordStrength(password);
}

// Função para verificar a força da senha
function checkPasswordStrength(password) {
    const strengthMessage = document.getElementById("password-strength");
    let strength = "Fraca";

    // Verificar se a senha contém números, letras maiúsculas e minúsculas, e caracteres especiais
    const hasNumber = /[0-9]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

    if (hasNumber && hasUppercase && hasLowercase && hasSpecial && password.length >= 12) {
        strength = "Forte";
    } else if (password.length >= 8) {
        strength = "Média";
    }

    strengthMessage.textContent = `Força da Senha: ${strength}`;
}

// Função para alternar entre temas claro e escuro
function toggleTheme() {
    document.body.classList.toggle('dark');
    
    const themeButton = document.getElementById("theme-toggle");
    if (document.body.classList.contains('dark')) {
        themeButton.textContent = '🌞';  // Sol para tema claro
    } else {
        themeButton.textContent = '🌙';  // Lua para tema escuro
    }
}
