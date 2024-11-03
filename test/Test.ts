import assert from "assert";
import { 
  TestHelpers,
  Vibers_IncrementedUserVibe
} from "generated";
const { MockDb, Vibers } = TestHelpers;

describe("Vibers contract IncrementedUserVibe event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Vibers contract IncrementedUserVibe event
  const event = Vibers.IncrementedUserVibe.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Vibers_IncrementedUserVibe is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Vibers.IncrementedUserVibe.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualVibersIncrementedUserVibe = mockDbUpdated.entities.Vibers_IncrementedUserVibe.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedVibersIncrementedUserVibe: Vibers_IncrementedUserVibe = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      userAddress: event.params.userAddress,
      amount: event.params.amount,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualVibersIncrementedUserVibe, expectedVibersIncrementedUserVibe, "Actual VibersIncrementedUserVibe should be the same as the expectedVibersIncrementedUserVibe");
  });
});
