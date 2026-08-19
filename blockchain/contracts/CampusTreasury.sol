// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract CampusTreasury {
    address public immutable governor;

    event FundsReceived(
        address indexed sender,
        uint256 amount
    );

    event FundsReleased(
        address indexed recipient,
        uint256 amount
    );

    modifier onlyGovernor() {
        require(
            msg.sender == governor,
            "CampusTreasury: caller is not governor"
        );
        _;
    }

    constructor(address governorAddress) {
        require(
            governorAddress != address(0),
            "CampusTreasury: invalid governor"
        );

        governor = governorAddress;
    }

    receive() external payable {
        emit FundsReceived(msg.sender, msg.value);
    }

    function releaseFunds(
        address payable recipient,
        uint256 amount
    ) external onlyGovernor {
        require(
            recipient != address(0),
            "CampusTreasury: invalid recipient"
        );

        require(
            address(this).balance >= amount,
            "CampusTreasury: insufficient funds"
        );

        (bool success, ) = recipient.call{value: amount}("");

        require(
            success,
            "CampusTreasury: transfer failed"
        );

        emit FundsReleased(recipient, amount);
    }

    function balance()
        external
        view
        returns (uint256)
    {
        return address(this).balance;
    }
}