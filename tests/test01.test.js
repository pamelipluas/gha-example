describe('Test Suite', () => {
    it('should timeout', () => {
        
        setTimeout(() => {
            expect(1).toBe(1);
        }, 70000)
        
    });

    it('should pass', () => {
        expect(1).toBe(1);
    });

    xit('should fail', () => {
        expect(1).toBe(2);
    });
    
});