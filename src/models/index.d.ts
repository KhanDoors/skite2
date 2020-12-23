import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Portfolio {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly url?: string;
  constructor(init: ModelInit<Portfolio>);
  static copyOf(source: Portfolio, mutator: (draft: MutableModel<Portfolio>) => MutableModel<Portfolio> | void): Portfolio;
}