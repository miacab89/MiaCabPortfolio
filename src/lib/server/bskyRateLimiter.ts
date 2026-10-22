class BlueskyRateLimiter {
    private requestCount: number = 0;
    private startTime: number = Date.now();
    private readonly REQUEST_LIMIT: number = 3000; // 3,000 requests per 5 minutes
    private readonly WRITE_LIMIT: number = 5000; // 5,000 points per hour
    private points: number = 0;

    public async makeRequest(apiCall: () => Promise<unknown>): Promise<unknown> {
        this.checkRateLimit();

        try {
            const response = await apiCall();
            this.requestCount++;
            return response;
        } catch (error: unknown) {
            if (error instanceof Error && (error as { response?: { status: number } }).response?.status === 429) {
                console.error("Rate limit exceeded. Please wait.");
                // Implement backoff strategy here
            }
            throw error;
        }
    }

    private checkRateLimit() {
        const currentTime = Date.now();
        if (currentTime - this.startTime > 5 * 60 * 1000) {
            this.requestCount = 0; // Reset every 5 minutes
            this.startTime = currentTime;
        }
        if (this.requestCount >= this.REQUEST_LIMIT) {
            throw new Error("Exceeded request limit.");
        }
    }

    public addPoints(actionType: 'CREATE' | 'UPDATE' | 'DELETE') {
        const pointValue = actionType === 'CREATE' ? 3 : actionType === 'UPDATE' ? 2 : 1;
        this.points += pointValue;

        if (this.points > this.WRITE_LIMIT) {
            throw new Error("Exceeded write operation limit.");
        }
    }
}

export const BlueSkyRateLimiter = new BlueskyRateLimiter();