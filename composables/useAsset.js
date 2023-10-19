export function useAsset(path) {
    const assets = import.meta.glob('~/assets/images/**/*', {
        eager: true,
        import: 'default',
    })
    // @ts-expect-error: wrong type info
    return assets['/assets/images' + path]
}



