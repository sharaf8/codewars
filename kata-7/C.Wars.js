function initials(name) {
    const names = name.split(" ");

    const initials = names.slice(0, -1).map(name => name.charAt(0).toUpperCase());

    const abbreviatedName = initials.join(".") + "." + names[names.length - 1].charAt(0).toUpperCase() + names[names.length - 1].slice(1).toLowerCase();

    return abbreviatedName;
}
