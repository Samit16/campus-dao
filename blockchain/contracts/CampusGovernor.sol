// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Governor} from "@openzeppelin/contracts/governance/Governor.sol";
import {GovernorCountingSimple} from "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import {GovernorVotes} from "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import {GovernorVotesQuorumFraction} from "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import {IVotes} from "@openzeppelin/contracts/governance/utils/IVotes.sol";

contract CampusGovernor is
    Governor,
    GovernorCountingSimple,
    GovernorVotes,
    GovernorVotesQuorumFraction
{
    constructor(
        IVotes token
    )
        Governor("Campus Governor")
        GovernorVotes(token)
        GovernorVotesQuorumFraction(4)
    {}

    function votingDelay()
        public
        pure
        override
        returns (uint256)
    {
        return 1;
    }

    function votingPeriod()
        public
        pure
        override
        returns (uint256)
    {
        return 30;
    }

    function proposalThreshold()
        public
        pure
        override
        returns (uint256)
    {
        return 0;
    }
}