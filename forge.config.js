module.exports = {
    forge: {
        packagerConfig: {},
        makers: [
            {
                name: '@electron-forge/maker-flatpak',
                config: {
                    options: {
                        id: 'flatpak_test',
                        productName: 'flatpak_test',
                    }
                }
            },
        ]
    }
}
