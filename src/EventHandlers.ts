/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Vibers,
  Vibers_IncrementedUserVibe,
  Vibers_NewUser,
  Vibers_PendingRewardsUpdated,
  Vibers_RemovedUserVibe,
  Vibers_RewardClassAdded,
  Vibers_RewardClassRemoved,
  Vibers_UpdatedUserVibe,
  Vibers_UserEpochRewardsUpdated,
  Vibers_UserPaidOutRewards,
  Vibers_UserTradeVolumeUpdated,
  Vibers_VibeClassProcessAdded,
  Vibers_VibeClassProcessRemoved,
  Vibers_VibeClassSingleAdded,
  Vibers_VibeClassSingleRemoved,
} from "generated";

Vibers.IncrementedUserVibe.handler(async ({ event, context }) => {
  const entity: Vibers_IncrementedUserVibe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    userAddress: event.params.userAddress,
    amount: event.params.amount,
  };

  context.Vibers_IncrementedUserVibe.set(entity);
});

Vibers.NewUser.handler(async ({ event, context }) => {
  const entity: Vibers_NewUser = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    userAddress: event.params.userAddress,
  };

  context.Vibers_NewUser.set(entity);
});

Vibers.PendingRewardsUpdated.handler(async ({ event, context }) => {
  const entity: Vibers_PendingRewardsUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    newPendingRewards: event.params.newPendingRewards,
  };

  context.Vibers_PendingRewardsUpdated.set(entity);
});

Vibers.RemovedUserVibe.handler(async ({ event, context }) => {
  const entity: Vibers_RemovedUserVibe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    userAddress: event.params.userAddress,
    classAddress: event.params.classAddress,
  };

  context.Vibers_RemovedUserVibe.set(entity);
});

Vibers.RewardClassAdded.handler(async ({ event, context }) => {
  const entity: Vibers_RewardClassAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    classAddress: event.params.classAddress,
  };

  context.Vibers_RewardClassAdded.set(entity);
});

Vibers.RewardClassRemoved.handler(async ({ event, context }) => {
  const entity: Vibers_RewardClassRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    classAddress: event.params.classAddress,
  };

  context.Vibers_RewardClassRemoved.set(entity);
});

Vibers.UpdatedUserVibe.handler(async ({ event, context }) => {
  const entity: Vibers_UpdatedUserVibe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    userAddress: event.params.userAddress,
    classAddress: event.params.classAddress,
    newVibes: event.params.newVibes,
  };

  context.Vibers_UpdatedUserVibe.set(entity);
});

Vibers.UserEpochRewardsUpdated.handler(async ({ event, context }) => {
  const entity: Vibers_UserEpochRewardsUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    userAddress: event.params.userAddress,
    epoch: event.params.epoch,
    rewards: event.params.rewards,
    lpAddress: event.params.lpAddress,
    vibes: event.params.vibes,
  };

  context.Vibers_UserEpochRewardsUpdated.set(entity);
});

Vibers.UserPaidOutRewards.handler(async ({ event, context }) => {
  const entity: Vibers_UserPaidOutRewards = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    paidOutRewards: event.params.paidOutRewards,
  };

  context.Vibers_UserPaidOutRewards.set(entity);
});

Vibers.UserTradeVolumeUpdated.handler(async ({ event, context }) => {
  const entity: Vibers_UserTradeVolumeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    userAddress: event.params.userAddress,
    epoch: event.params.epoch,
    value: event.params.value,
    lpAddress: event.params.lpAddress,
    sell: event.params.sell,
  };

  context.Vibers_UserTradeVolumeUpdated.set(entity);
});

Vibers.VibeClassProcessAdded.handler(async ({ event, context }) => {
  const entity: Vibers_VibeClassProcessAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    classAddress: event.params.classAddress,
  };

  context.Vibers_VibeClassProcessAdded.set(entity);
});

Vibers.VibeClassProcessRemoved.handler(async ({ event, context }) => {
  const entity: Vibers_VibeClassProcessRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    classAddress: event.params.classAddress,
  };

  context.Vibers_VibeClassProcessRemoved.set(entity);
});

Vibers.VibeClassSingleAdded.handler(async ({ event, context }) => {
  const entity: Vibers_VibeClassSingleAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    classAddress: event.params.classAddress,
  };

  context.Vibers_VibeClassSingleAdded.set(entity);
});

Vibers.VibeClassSingleRemoved.handler(async ({ event, context }) => {
  const entity: Vibers_VibeClassSingleRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    classAddress: event.params.classAddress,
  };

  context.Vibers_VibeClassSingleRemoved.set(entity);
});
