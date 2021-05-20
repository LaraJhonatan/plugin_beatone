export interface BetOnePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
