/**
 * ResourceReg — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { ResourceAllocatorOrchestrator } from "@webwaka/organelle-resource-allocator";
import { DiscoveryRegistryOrchestrator } from "@webwaka/organelle-discovery-registry";

export { ResourceAllocatorOrchestrator } from '@webwaka/organelle-resource-allocator';
export { DiscoveryRegistryOrchestrator } from '@webwaka/organelle-discovery-registry';

/**
 * ResourceReg Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class ResourceRegComposition {
  private resourceAllocatorOrchestrator: ResourceAllocatorOrchestrator;
  private discoveryRegistryOrchestrator: DiscoveryRegistryOrchestrator;

  constructor() {
    this.resourceAllocatorOrchestrator = new ResourceAllocatorOrchestrator();
    this.discoveryRegistryOrchestrator = new DiscoveryRegistryOrchestrator();
  }
}

export * from "./types";
