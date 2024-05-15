function domainName(url){
    let withoutProtocol = url.replace(/(^\w+:|^)\/\//, '');

    if (withoutProtocol.startsWith('www.')) {
        withoutProtocol = withoutProtocol.slice(4);
    }

    const dotIndex = withoutProtocol.indexOf('.');
    if (dotIndex !== -1) {
        return withoutProtocol.slice(0, dotIndex);
    }

    return withoutProtocol;
}
