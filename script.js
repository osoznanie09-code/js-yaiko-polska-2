const API_BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw new Error('Не удалось получить данные с сервера. Пожалуйста, проверьте подключение к интернету.');
    }
}

function showError(containerId, message) {
    const container = document.getElementById(containerId);
    if (container) {
        container.textContent = message;
        container.style.display = 'block';
    }
}

function hideError(containerId) {
    const errorContainer = document.getElementById(containerId);
    if (errorContainer) {
        errorContainer.style.display = 'none';
    }
}

function showLoader(loaderId) {
    const loaderContainer = document.getElementById(loaderId);
    if (loaderContainer) {
        loaderContainer.style.display = 'block';
    }
}

function hideLoader(loaderId) {
    const loaderContainer = document.getElementById(loaderId);
    if (loaderContainer) {
        loaderContainer.style.display = 'none';
    }
}

