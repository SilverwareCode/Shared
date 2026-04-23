async function getRemoteContent(targetContainerId, url) {
    const kontejner = document.getElementById(targetContainerId);
    // DŮLEŽITÉ: Musí to být adresa začínající raw.githubusercontent.com
    //const url = 'https://raw.githubusercontent.com/SilverwareCode/Shared/refs/heads/main/OCI/Marketing/MarketingPackages/TestPackage/index.html';


    if (kontejner == null) {
        alert("kontejner " + targetContainerId +" null");
    }

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Nepodařilo se stáhnout soubor');

        const text = await response.text();
        kontejner.innerHTML = text;
    } catch (error) {
        console.error('Chyba:', error);
        kontejner.innerHTML = 'Chyba při načítání obsahu z GitHubu.';
    }
}

