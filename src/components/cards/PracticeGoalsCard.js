const PracticeGoalsCard = () => {
    return (
        <div className="card text-center">
            <div className="card-header">
                Practice Goals
            </div>
            <div className="card-body">
                <h5 className="card-title">What are three goals you have for your next practice?</h5>
                <div class="input-group">
                    <span class="input-group-text">1.</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div class="input-group">
                    <span class="input-group-text">2.</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div class="input-group">
                    <span class="input-group-text">3.</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <a href="/#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-footer text-body-secondary">
                2 days ago
            </div>
        </div>
    )
}

export default PracticeGoalsCard