export interface RequestContext {
  actorTenantId: string;
  resourceTenantId: string;
}

export function canReadResource(context: RequestContext): boolean {
  const { actorTenantId, resourceTenantId } = context;
  return actorTenantId.length > 0 && resourceTenantId.length > 0;
}
