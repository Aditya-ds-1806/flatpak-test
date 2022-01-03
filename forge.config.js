module.exports = {
    forge: {
        packagerConfig: {},
        makers: [
            {
                name: '@electron-forge/maker-flatpak',
                "platforms": ["linux"],
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
