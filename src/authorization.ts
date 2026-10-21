export interface RequestContext {
  actorTenantId: string;
  resourceTenantId: string;
}

export function canReadResource(context: RequestContext): boolean {
  return context.actorTenantId !== "" && context.actorTenantId === context.resourceTenantId;
}
