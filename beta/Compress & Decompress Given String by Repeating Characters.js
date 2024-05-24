compress = s => s.replace(/<\d+>/g, '\\$&').replace(/([^\\])\1{5,}/g, (x, $1) => `${$1}<${x.length}>`)
decompress = s => s.replace(/([^\\])<(\d+)>/g, (_, $1, $2) => $1.repeat($2))