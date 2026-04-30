export function hasPermission(permissions, permission) {
  return permissions === null || permissions.includes(permission);
}

export function canCreateComment(permissions) {
  return hasPermission(permissions, "comments:create");
}

export function canEditComment(permissions, comment, currentUser) {
  if (permissions === null) return true;
  return (
    permissions.includes("comments:edit-any") ||
    (permissions.includes("comments:edit-own") && comment.author === currentUser)
  );
}

export function canResolveComment(permissions) {
  return hasPermission(permissions, "comments:resolve");
}

export function canDeleteComment(permissions) {
  return hasPermission(permissions, "comments:delete");
}
