#include <iostream>

int main() {
    int prodprices[] = { 10, 14, 22, 33, 44, 13, 22, 55, 66, 77 };
    int prodnbr;
    int totalsum = 0;

    std::cout << "Supermarket" << std::endl;
    std::cout << "===========" << std::endl;

    do {
        std::cout << "Please select product (1-10) 0 to Quit: ";
        std::cin >> prodnbr;

        if (prodnbr >= 1 && prodnbr <= 10) {
            std::cout << "Product: " << prodnbr << " Price: " << prodprices[prodnbr - 1] << std::endl;
            totalsum += prodprices[prodnbr - 1];
        } else if (prodnbr != 0) {
            std::cout << "Please select correct product (1-10)" << std::endl;
        }

    } while (prodnbr != 0);

    std::cout << "Total: " << totalsum << std::endl;

    int payment;
    std::cout << "Payment: ";
    std::cin >> payment;

    int change = payment - totalsum;
    std::cout << "Change: " << change << std::endl;

    return 0;
}
