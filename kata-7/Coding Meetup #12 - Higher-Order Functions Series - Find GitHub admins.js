function findAdmin(list, lang) {
    return list.filter(char => char.language === lang && char.githubAdmin === "yes");
}
